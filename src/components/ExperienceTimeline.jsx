import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ExperienceTimeline = ({ experiences, focusStats }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    container.innerHTML = '';
    const width = container.clientWidth || 360;
    const height = width;
    const radius = Math.min(width, height) / 2 - 20;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const angleScale = d3
      .scaleBand()
      .domain(focusStats.map((d) => d.label))
      .range([0, 2 * Math.PI])
      .padding(0.15);

    const radiusScale = d3.scaleLinear().domain([0, 100]).range([radius * 0.25, radius]);

    const gradient = svg
      .append('defs')
      .append('radialGradient')
      .attr('id', 'focus-gradient')
      .attr('cx', '50%')
      .attr('cy', '50%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#78ffe0');
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#5a6dff');

    svg
      .append('circle')
      .attr('r', radius * 0.35)
      .attr('fill', 'rgba(18, 19, 36, 0.9)')
      .attr('stroke', 'rgba(120, 255, 224, 0.2)')
      .attr('stroke-width', 2);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.45)
      .outerRadius((d) => radiusScale(d.value))
      .startAngle((d) => angleScale(d.label))
      .endAngle((d) => angleScale(d.label) + angleScale.bandwidth())
      .padAngle(0.02)
      .padRadius(100)
      .cornerRadius(12);

    svg
      .selectAll('path.focus-arc')
      .data(focusStats)
      .enter()
      .append('path')
      .attr('class', 'focus-arc')
      .attr('d', arc)
      .attr('fill', 'url(#focus-gradient)')
      .attr('fill-opacity', 0.65)
      .attr('stroke', 'rgba(120, 255, 224, 0.35)')
      .attr('stroke-width', 1.5);

    svg
      .selectAll('text.focus-label')
      .data(focusStats)
      .enter()
      .append('text')
      .attr('class', 'focus-label')
      .attr('text-anchor', 'middle')
      .attr('transform', (d) => {
        const angle = angleScale(d.label) + angleScale.bandwidth() / 2 - Math.PI / 2;
        const r = radiusScale(d.value) + 18;
        return `rotate(${(angle * 180) / Math.PI}) translate(${r},0)`;
      })
      .style('fill', 'rgba(210, 215, 255, 0.85)')
      .style('font-size', '0.75rem')
      .text((d) => d.label);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .style('fill', 'rgba(120, 255, 224, 0.75)')
      .style('font-size', '0.85rem')
      .style('letter-spacing', '0.12em')
      .text('Impact Focus');
  }, [focusStats]);

  return (
    <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'minmax(260px, 1fr) minmax(260px, 1.1fr)', alignItems: 'center' }}>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="timeline-item">
            <p className="timeline-period">{exp.period}</p>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.2rem', color: 'rgba(210, 215, 255, 0.8)', display: 'grid', gap: '0.5rem' }}>
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div>
        <div
          ref={chartRef}
          style={{
            width: '100%',
            minHeight: '320px',
            background: 'radial-gradient(circle, rgba(120, 255, 224, 0.1), rgba(5, 6, 15, 0.9) 70%)',
            borderRadius: '24px',
            border: '1px solid rgba(120, 255, 224, 0.2)',
            boxShadow: '0 20px 45px rgba(8, 12, 26, 0.6)',
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceTimeline;
