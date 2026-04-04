import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections2({
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
          d="M0.837297 10.4176L3.58489 13.1652L7.75009 9L3.58489 4.83481L0.837297 7.5824C0.0543971 8.3653 0.0543971 9.6347 0.837297 10.4176Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.1629 10.4176L14.4153 13.1652L10.2501 9L14.4153 4.83481L17.1629 7.5824C17.9458 8.3653 17.9458 9.6347 17.1629 10.4176Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.9153 4.83479L9.1677 2.08718C8.3848 1.30428 7.1154 1.30428 6.3325 2.08718L3.5849 4.83479L7.7501 8.99999L11.9153 4.83479Z"
          fill={fill}
        />
        <path
          d="M11.9153 13.1652L9.1677 15.9128C8.3848 16.6957 7.1154 16.6957 6.3325 15.9128L3.5849 13.1652L7.7501 9L11.9153 13.1652Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Connections2;
