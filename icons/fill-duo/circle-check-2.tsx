import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheck2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9.00011 16C12.8661 16 16.0001 12.866 16.0001 9C16.0001 5.13401 12.8661 2 9.00011 2C5.13411 2 2.00012 5.13401 2.00012 9C2.00012 12.866 5.13411 16 9.00011 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.01863 11.5C8.80673 11.5 8.60364 11.4102 8.46104 11.2515L5.69246 8.1744C5.41516 7.8668 5.44045 7.3927 5.74815 7.1153C6.05675 6.838 6.52935 6.8633 6.80775 7.1715L8.97764 9.5826L14.6583 2.2891C14.9142 1.962 15.3839 1.90341 15.711 2.15821C16.0381 2.41301 16.0967 2.88431 15.8419 3.21091L9.61055 11.2109C9.47385 11.3857 9.26675 11.4917 9.04515 11.4995C9.03635 11.5 9.02743 11.5 9.01863 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCheck2;
