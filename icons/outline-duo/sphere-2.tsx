import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sphere2({
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
          d="M8.972 16.2499V16.2217C8.98132 16.2219 8.99066 16.222 9 16.222C10.6426 16.222 11.9742 12.9886 11.9742 9C11.9742 5.0114 10.6426 1.778 9 1.778C8.99066 1.778 8.98132 1.7781 8.972 1.77831V1.75005L9 1.75C8.99066 1.75 8.98133 1.75002 8.972 1.75005C4.98081 1.76514 1.75 5.00527 1.75 9C1.75 12.9947 4.98081 16.2349 8.972 16.2499Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 9C16.25 10.657 13.004 12 9 12C4.996 12 1.75 10.657 1.75 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.972 1.778C10.629 1.778 11.972 5.024 11.972 9.028C11.972 13.032 10.629 16.278 8.972 16.278"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Sphere2;
