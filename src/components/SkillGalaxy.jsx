import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import {
  SiPython,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiPytorch,
  SiHuggingface,
  SiOpenai,
  SiTableau,
  SiMatplotlib,
  SiSeaborn,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiLeetcode,
  SiC,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { GiMeshNetwork, GiCircuitry, GiNetworkBars, GiProcessor } from 'react-icons/gi';
import { TbArrowsExchange } from 'react-icons/tb';
import { RiRobot2Line } from 'react-icons/ri';

const iconMap = {
  SiPython,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiPytorch,
  SiHuggingface,
  SiOpenai,
  SiTableau,
  SiMatplotlib,
  SiSeaborn,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiLeetcode,
  SiC,
  FaJava,
  GiMeshNetwork,
  GiCircuitry,
  GiNetworkBars,
  GiProcessor,
  TbArrowsExchange,
  RiRobot2Line,
};

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
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const radius = Math.min(width, height) / 2 - 24;
    const data = skills.galaxy || [];

    const angleScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, 2 * Math.PI])
      .padding(0.06);

    const radiusScale = d3.scaleLinear().domain([0, 100]).range([radius * 0.35, radius]);

    const gradient = svg
      .append('defs')
      .append('radialGradient')
      .attr('id', 'skill-galaxy-gradient')
      .attr('cx', '50%')
      .attr('cy', '50%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#78ffe0');
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#5a6dff');

    svg
      .append('circle')
      .attr('r', radius * 0.4)
      .attr('fill', 'rgba(18, 19, 36, 0.9)')
      .attr('stroke', 'rgba(120, 255, 224, 0.2)')
      .attr('stroke-width', 1.5);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.45)
      .outerRadius((d) => radiusScale(d.level))
      .startAngle((d) => angleScale(d.name))
      .endAngle((d) => angleScale(d.name) + angleScale.bandwidth())
      .padAngle(0.02)
      .padRadius(100)
      .cornerRadius(12);

    svg
      .selectAll('path.skill-arc')
      .data(data)
      .enter()
      .append('path')
      .attr('class', 'skill-arc')
      .attr('d', arc)
      .attr('fill', 'url(#skill-galaxy-gradient)')
      .attr('fill-opacity', 0.65)
      .attr('stroke', 'rgba(120, 255, 224, 0.35)')
      .attr('stroke-width', 1.25);

    svg
      .selectAll('text.skill-label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'skill-label')
      .attr('text-anchor', 'middle')
      .attr('transform', (d) => {
        const angle = angleScale(d.name) + angleScale.bandwidth() / 2 - Math.PI / 2;
        const r = radiusScale(d.level) + 18;
        return `rotate(${(angle * 180) / Math.PI}) translate(${r},0)`;
      })
      .style('fill', 'rgba(210, 215, 255, 0.85)')
      .style('font-size', '0.75rem')
      .text((d) => d.name);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .style('fill', 'rgba(120, 255, 224, 0.75)')
      .style('font-size', '0.85rem')
      .style('letter-spacing', '0.12em')
      .text('Skill Galaxy');
  }, [skills]);

  return (
    <div style={{ display: 'grid', gap: '2.5rem' }}>
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
            The Skill Galaxy charts proficiency across every technical pillar. Radial arcs stretch with experience depth, making it easy to see where AI engineering, data storytelling, and full stack delivery intersect.
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

      <div className="skill-icon-grid">
        {skills.categories.map((category) => (
          <article key={category.title} className="skill-card">
            <h3>{category.title}</h3>
            <div className="skill-icon-list">
              {category.items.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={item.name} className="skill-icon-chip">
                    {IconComponent ? <IconComponent aria-hidden size={26} /> : <span style={{ fontSize: '1.5rem' }}>•</span>}
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillGalaxy;
