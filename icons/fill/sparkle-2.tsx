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
          d="M16.525 6.05302L13.245 4.75602L11.947 1.47502C11.72 0.903021 10.779 0.903021 10.552 1.47502L9.25399 4.75602L5.97399 6.05302C5.68799 6.16602 5.49899 6.44302 5.49899 6.75002C5.49899 7.05702 5.68699 7.33402 5.97399 7.44702L9.25399 8.74402L10.552 12.025C10.665 12.311 10.942 12.499 11.249 12.499C11.556 12.499 11.833 12.311 11.946 12.025L13.244 8.74402L16.524 7.44702C16.81 7.33402 16.999 7.05702 16.999 6.75002C16.999 6.44302 16.812 6.16602 16.525 6.05302Z"
          fill={fill}
        />
        <path
          d="M4.75 9.5C5.09415 9.5 5.39414 9.73422 5.47761 10.0681L5.96847 12.0315L7.9319 12.5224C8.26578 12.6059 8.5 12.9058 8.5 13.25C8.5 13.5942 8.26578 13.8941 7.9319 13.9776L5.96847 14.4685L5.47761 16.4319C5.39414 16.7658 5.09415 17 4.75 17C4.40585 17 4.10586 16.7658 4.02239 16.4319L3.53153 14.4685L1.5681 13.9776C1.23422 13.8941 1 13.5942 1 13.25C1 12.9058 1.23422 12.6059 1.5681 12.5224L3.53153 12.0315L4.02239 10.0681C4.10586 9.73422 4.40585 9.5 4.75 9.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sparkle2;
