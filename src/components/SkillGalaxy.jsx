import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SkillGalaxy = ({ skills }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    container.innerHTML = '';
    const width = container.clientWidth || 520;
    const height = 420;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const clusters = [
      { name: 'Languages', color: '#78ffe0', data: skills.languages },
      { name: 'Frameworks', color: '#5a6dff', data: skills.frameworks },
      { name: 'Tools', color: '#e58eff', data: skills.tools },
    ];

    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = Math.min(width, height) / 3;

    clusters.forEach((cluster, clusterIndex) => {
      const angleSlice = (2 * Math.PI) / cluster.data.length;
      const radius = baseRadius * (1 + clusterIndex * 0.25);

      cluster.data.forEach((item, itemIndex) => {
        const angle = angleSlice * itemIndex - Math.PI / 2;
        const strength = d3.scaleLinear().domain([0, 100]).range([radius * 0.45, radius])(item.level);
        const x = centerX + Math.cos(angle) * strength;
        const y = centerY + Math.sin(angle) * strength;

        svg
          .append('line')
          .attr('x1', centerX)
          .attr('y1', centerY)
          .attr('x2', x)
          .attr('y2', y)
          .attr('stroke', cluster.color)
          .attr('stroke-opacity', 0.25);

        svg
          .append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 18 + item.level / 12)
          .attr('fill', cluster.color)
          .attr('fill-opacity', 0.35)
          .attr('stroke', cluster.color)
          .attr('stroke-width', 1.25)
          .append('title')
          .text(`${item.name} · ${item.level}%`);

        svg
          .append('text')
          .attr('x', x)
          .attr('y', y + 4)
          .attr('text-anchor', 'middle')
          .style('font-size', '0.75rem')
          .style('fill', 'rgba(250, 250, 255, 0.85)')
          .text(item.name);
      });

      svg
        .append('text')
        .attr('x', centerX)
        .attr('y', centerY - baseRadius - clusterIndex * 45)
        .attr('text-anchor', 'middle')
        .style('fill', cluster.color)
        .style('font-size', '0.8rem')
        .style('letter-spacing', '0.18em')
        .style('text-transform', 'uppercase')
        .text(cluster.name);
    });

    svg
      .append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', baseRadius * 0.35)
      .attr('fill', 'rgba(18, 19, 36, 0.9)')
      .attr('stroke', 'rgba(255, 255, 255, 0.08)')
      .attr('stroke-width', 1.5);

    svg
      .append('text')
      .attr('x', centerX)
      .attr('y', centerY - 8)
      .attr('text-anchor', 'middle')
      .style('font-size', '0.95rem')
      .style('letter-spacing', '0.12em')
      .style('fill', 'rgba(210, 215, 255, 0.85)')
      .text('Jumana Skill Galaxy');

    svg
      .append('text')
      .attr('x', centerX)
      .attr('y', centerY + 14)
      .attr('text-anchor', 'middle')
      .style('font-size', '0.75rem')
      .style('fill', 'rgba(160, 165, 200, 0.75)')
      .text('Hover nodes for mastery levels');
  }, [skills]);

  return (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'minmax(260px, 1fr) minmax(320px, 1.1fr)',
        alignItems: 'center',
      }}
    >
      <div>
        <p style={{ color: 'rgba(200, 203, 240, 0.85)' }}>
          The Skill Galaxy visualizes the relative mastery across languages, frameworks, and tooling. Each orbit expands with the
          depth of experience while node diameters communicate confidence. Hovering over a node reveals exact proficiency.
        </p>
        <p style={{ marginTop: '1.5rem', color: 'rgba(120, 255, 224, 0.75)', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
          Data visualization powered by D3.js
        </p>
      </div>
      <div
        ref={chartRef}
        style={{
          width: '100%',
          minHeight: '420px',
          background: 'linear-gradient(140deg, rgba(120, 255, 224, 0.08), rgba(90, 109, 255, 0.12))',
          borderRadius: '24px',
          border: '1px solid rgba(120, 255, 224, 0.2)',
          boxShadow: '0 20px 45px rgba(8, 12, 26, 0.6)',
          padding: '1rem',
        }}
      />
    </div>
  );
};

export default SkillGalaxy;
