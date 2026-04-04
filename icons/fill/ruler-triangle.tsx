import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RulerTriangle({
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
          d="M15.823 13.013L4.987 2.17702C4.484 1.67502 3.736 1.52502 3.08 1.79802C2.424 2.07002 2 2.70402 2 3.41502V7H3.75C4.16421 7 4.5 7.33579 4.5 7.75C4.5 8.16421 4.16421 8.5 3.75 8.5H2V10.5H3.75C4.16421 10.5 4.5 10.8358 4.5 11.25C4.5 11.6642 4.16421 12 3.75 12H2V14.251C2 15.216 2.785 16.001 3.75 16.001H6V14.25C6 13.8358 6.33579 13.5 6.75 13.5C7.16421 13.5 7.5 13.8358 7.5 14.25V16.001H9.5V14.25C9.5 13.8358 9.83579 13.5 10.25 13.5C10.6642 13.5 11 13.8358 11 14.25V16.001H14.586C15.296 16.001 15.931 15.577 16.202 14.921C16.474 14.264 16.325 13.516 15.823 13.014V13.013ZM6.49902 12H8.42502C8.87102 12 9.09402 11.461 8.77902 11.146L6.85302 9.22099C6.53802 8.90699 5.99902 9.12899 5.99902 9.57499V11.5C5.99902 11.776 6.22302 12 6.49902 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RulerTriangle;
