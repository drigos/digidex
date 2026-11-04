/*
 * Shared rendering engine for the Digimon evolution-tree infographics.
 * A page only supplies data; this file builds the arrow markers, legend,
 * column headers, node cards and the SVG edges. See README.md for conventions.
 *
 * Usage (in a page, after the DOM skeleton and <script src="digivolution.js">):
 *
 *   DigiTree.mount({
 *     legend:  [ ['normal','Normal evolution'], ['x','X-Digivolution'], ... ],
 *     columns: [ [42,'Fresh'], [304,'In-Training'], ... ],   // [xPx, label]
 *     nodes:   [ {id,x,y,cls,name,lvl,note,wiki,img,
 *                 badge:{cls:'lw',text:'...', href:'...', title:'...'},
 *                 nav:{href:'...', title:'...'}}, ... ],
 *     edges:   function (edge) { edge('a','b','normal'); ... }
 *   });
 *
 * img is the official Reference Book slug (e.g. 'agumon', 'vamdemon'), which imageUrl turns
 * into the digimon.net artwork address, or an absolute URL for a Digimon with no official
 * entry (also exported as DigiTree.imageUrl).
 *
 * nav renders a round arrow button to the right of the card that jumps to another
 * infographic page (relative href), while the card itself keeps linking to the wiki.
 * A badge with an href becomes a clickable link (e.g. to a group roster page); without
 * one it stays a plain label on the card.
 *
 * edge(from, to, type, fromSide='right', toSide='left', opts)
 *   type    : one of the trigger keys (normal|x|dna|mode|dark|lateral|armor|bond|burst|lore)
 *   *Side   : left|right|top|bottom (anchor on the card's bounding box)
 *   opts    : { shape:'vertical'|'leftbus', busX, points:[[x,y],...], r,
 *               label, lx, ly, width, opacity, startArrow,   // startArrow: double-headed
 *               noArrow,                                      // noArrow: draw no arrowhead (e.g. lore links)
 *               fromX, fromY, toX, toY }   // override any computed anchor coord
 */
(function (global) {
  'use strict';

  var TRIGGERS = ['normal', 'x', 'dna', 'mode', 'dark', 'lateral', 'armor', 'bond', 'burst', 'lore'];
  var DASH = { normal: '', x: '7 6', dna: '6 6', mode: '10 6', dark: '4 7', lateral: '10 7', armor: '10 7', bond: '2 7', burst: '11 5', lore: '1 8' };
  var WIKI = 'https://digimon.fandom.com/wiki/';
  // Artwork is hotlinked from the official Digimon Reference Book: DigimonWiki/Fandom now
  // answers embedded images with a bot challenge. A node's img is the Reference Book slug
  // (the directory_name of its digimon.net page) or, for a Digimon without an official
  // entry, an absolute image URL from another source.
  var ART = 'https://digimon.net/cimages/digimon/';

  // 'agumon' -> https://digimon.net/cimages/digimon/agumon.jpg; absolute URLs pass through
  function imageUrl(img) {
    return /^https?:\/\//.test(img) ? img : ART + img + '.jpg';
  }

  function cssVar(k) { return getComputedStyle(document.documentElement).getPropertyValue(k).trim(); }

  function mount(cfg) {
    var canvas = document.getElementById('canvas');
    var svg = document.getElementById('edges');
    var labels = document.getElementById('labels');
    var nodesEl = document.getElementById('nodes');

    var colors = {};
    TRIGGERS.forEach(function (t) { colors[t] = cssVar('--' + t); });

    // arrow markers (one per trigger)
    var defs = '<defs>';
    TRIGGERS.forEach(function (t) {
      defs += '<marker id="arrow-' + t + '" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto-start-reverse" markerUnits="strokeWidth"><path d="M0,0 L0,4 L5,2 z" fill="var(--' + t + ')" /></marker>';
    });
    defs += '</defs>';
    svg.innerHTML = defs;
    var defsMarkup = svg.innerHTML;

    // legend
    if (cfg.legend) {
      var grid = document.querySelector('.legend-grid');
      cfg.legend.forEach(function (item) {
        var d = document.createElement('div');
        d.innerHTML = '<span class="swatch" style="background:var(--' + item[0] + '); color:var(--' + item[0] + ')"></span>' + item[1];
        grid.appendChild(d);
      });
    }

    // column headers
    if (cfg.columns) {
      var cols = document.querySelector('.columns');
      cfg.columns.forEach(function (c) {
        var d = document.createElement('div');
        d.style.left = c[0] + 'px';
        d.textContent = c[1];
        cols.appendChild(d);
      });
    }

    // node cards
    if (cfg.nodes && nodesEl) {
      cfg.nodes.forEach(function (n) {
        var a = document.createElement('a');
        a.className = 'node ' + (n.cls || 'normal');
        a.id = n.id;
        a.href = WIKI + n.wiki;
        a.target = '_blank';
        a.style.left = n.x + 'px';
        a.style.top = n.y + 'px';
        a.innerHTML =
          (n.badge && !n.badge.href ? '<span class="' + n.badge.cls + '">' + n.badge.text + '</span>' : '') +
          '<img referrerpolicy="no-referrer" src="' + imageUrl(n.img) + '" alt="' + n.name + '">' +
          '<div class="name">' + n.name + '</div>' +
          '<div class="level">' + n.lvl + '</div>' +
          '<div class="note">' + n.note + '</div>';
        nodesEl.appendChild(a);
        if (n.badge && n.badge.href) {
          // a nested <a> inside the node link is invalid HTML, so a linked badge is a
          // canvas-level sibling right-aligned to the card via .badge-link
          var badge = document.createElement('a');
          badge.className = n.badge.cls + ' badge-link';
          badge.href = n.badge.href;
          if (n.badge.title) badge.title = n.badge.title;
          badge.textContent = n.badge.text;
          badge.style.left = (n.x + 195) + 'px';
          badge.style.top = (n.y + 9) + 'px';
          nodesEl.appendChild(badge);
        }
        if (n.nav) {
          var navBtn = document.createElement('a');
          navBtn.className = 'node-nav';
          navBtn.href = n.nav.href;
          if (n.nav.title) navBtn.title = n.nav.title;
          navBtn.style.left = (n.x + 216) + 'px';
          navBtn.style.top = (n.y + 81) + 'px';
          // inline SVG arrow: text glyphs sit below the optical center of the circle
          navBtn.innerHTML = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.5 8 H13 M9 3.8 L13.2 8 L9 12.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          nodesEl.appendChild(navBtn);
        }
      });
    }

    function rect(id) {
      var e = document.getElementById(id);
      var r = e.getBoundingClientRect();
      var c = canvas.getBoundingClientRect();
      return { left: r.left - c.left, top: r.top - c.top, width: r.width, height: r.height };
    }
    function point(id, side) {
      var r = rect(id);
      if (side === 'left') return { x: r.left, y: r.top + r.height / 2 };
      if (side === 'right') return { x: r.left + r.width, y: r.top + r.height / 2 };
      if (side === 'top') return { x: r.left + r.width / 2, y: r.top };
      if (side === 'bottom') return { x: r.left + r.width / 2, y: r.top + r.height };
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    function curvePath(a, b, shape, o) {
      o = o || {};
      var dx = b.x - a.x, dy = b.y - a.y;
      if (shape === 'vertical') {
        var mid = a.y + dy * 0.56;
        return 'M ' + a.x + ' ' + a.y + ' C ' + a.x + ' ' + mid + ', ' + b.x + ' ' + mid + ', ' + b.x + ' ' + b.y;
      }
      if (shape === 'leftbus') {
        var cx = o.busX;
        return 'M ' + a.x + ' ' + a.y + ' C ' + cx + ' ' + a.y + ', ' + cx + ' ' + b.y + ', ' + b.x + ' ' + b.y;
      }
      var bend = Math.max(48, Math.min(120, Math.abs(dx) * 0.33));
      var s = Math.sign(dx || 1);
      return 'M ' + a.x + ' ' + a.y + ' C ' + (a.x + s * bend) + ' ' + a.y + ', ' + (b.x - s * bend) + ' ' + b.y + ', ' + b.x + ' ' + b.y;
    }
    function polyPath(pts, r) {
      r = r || 16;
      var d = 'M ' + pts[0][0] + ' ' + pts[0][1];
      for (var i = 1; i < pts.length - 1; i++) {
        var p0 = pts[i - 1], p1 = pts[i], p2 = pts[i + 1];
        var d1 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1, d2 = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) || 1;
        var rr = Math.min(r, d1 / 2, d2 / 2);
        var a1 = [p1[0] + (p0[0] - p1[0]) / d1 * rr, p1[1] + (p0[1] - p1[1]) / d1 * rr];
        var a2 = [p1[0] + (p2[0] - p1[0]) / d2 * rr, p1[1] + (p2[1] - p1[1]) / d2 * rr];
        d += ' L ' + a1[0] + ' ' + a1[1] + ' Q ' + p1[0] + ' ' + p1[1] + ' ' + a2[0] + ' ' + a2[1];
      }
      var last = pts[pts.length - 1];
      d += ' L ' + last[0] + ' ' + last[1];
      return d;
    }
    function edge(from, to, type, fromSide, toSide, o) {
      fromSide = fromSide || 'right';
      toSide = toSide || 'left';
      o = o || {};
      var a = point(from, fromSide), b = point(to, toSide);
      if (o.fromX != null) a.x = o.fromX;
      if (o.fromY != null) a.y = o.fromY;
      if (o.toX != null) b.x = o.toX;
      if (o.toY != null) b.y = o.toY;
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      if (o.points) {
        p.setAttribute('d', polyPath([[a.x, a.y]].concat(o.points).concat([[b.x, b.y]]), o.r));
      } else {
        p.setAttribute('d', curvePath(a, b, o.shape || 'auto', o));
      }
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', colors[type]);
      p.setAttribute('stroke-width', o.width || 3);
      p.setAttribute('stroke-linecap', 'round');
      if (DASH[type]) p.setAttribute('stroke-dasharray', DASH[type]);
      if (!o.noArrow) p.setAttribute('marker-end', 'url(#arrow-' + type + ')');
      if (o.startArrow) p.setAttribute('marker-start', 'url(#arrow-' + type + ')');
      p.setAttribute('opacity', o.opacity || 0.97);
      svg.appendChild(p);
      if (o.label) {
        var lab = document.createElement('div');
        lab.className = 'edge-label label-' + type;
        lab.textContent = o.label;
        lab.style.left = (o.lx != null ? o.lx : (a.x + b.x) / 2) + 'px';
        lab.style.top = (o.ly != null ? o.ly : (a.y + b.y) / 2) + 'px';
        labels.appendChild(lab);
      }
    }
    function redraw() {
      svg.innerHTML = defsMarkup;
      labels.innerHTML = '';
      if (cfg.edges) cfg.edges(edge);
    }
    window.addEventListener('load', redraw);
    window.addEventListener('resize', redraw);
  }

  global.DigiTree = { mount: mount, imageUrl: imageUrl };
})(window);
