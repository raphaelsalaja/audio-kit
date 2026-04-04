import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sparkle2({
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
          d="M4.75 9.5C5.09415 9.5 5.39414 9.73422 5.47761 10.0681L5.96847 12.0315L7.9319 12.5224C8.26578 12.6059 8.5 12.9058 8.5 13.25C8.5 13.5942 8.26578 13.8941 7.9319 13.9776L5.96847 14.4685L5.47761 16.4319C5.39414 16.7658 5.09415 17 4.75 17C4.40585 17 4.10586 16.7658 4.02239 16.4319L3.53153 14.4685L1.5681 13.9776C1.23422 13.8941 1 13.5942 1 13.25C1 12.9058 1.23422 12.6059 1.5681 12.5224L3.53153 12.0315L4.02239 10.0681C4.10586 9.73422 4.40585 9.5 4.75 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 1C11.5577 1 11.8343 1.188 11.9474 1.47418L13.245 4.75506L16.5258 6.05256C16.812 6.16574 17 6.44225 17 6.75C17 7.05775 16.812 7.33426 16.5258 7.44744L13.245 8.74494L11.9474 12.0258C11.8343 12.312 11.5577 12.5 11.25 12.5C10.9423 12.5 10.6657 12.312 10.5526 12.0258L9.25505 8.74494L5.97418 7.44744C5.688 7.33426 5.5 7.05775 5.5 6.75C5.5 6.44225 5.688 6.16574 5.97418 6.05256L9.25505 4.75506L10.5526 1.47418C10.6657 1.188 10.9423 1 11.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sparkle2;
