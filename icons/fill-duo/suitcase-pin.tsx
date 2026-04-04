import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePin({
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
          d="m7,2.25c0-.138.112-.25.25-.25h3.5c.138,0,.25.112.25.25v1.75h1.5v-1.75c0-.966-.784-1.75-1.75-1.75h-3.5c-.966,0-1.75.784-1.75,1.75v1.75h1.5v-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.5,9.5c-1.93,0-3.5,1.571-3.5,3.5,0,2.655,3.011,4.337,3.14,4.407.112.062.236.093.36.093s.248-.031.36-.093c.129-.07,3.14-1.752,3.14-4.407,0-1.929-1.57-3.5-3.5-3.5Zm0,4.5c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1c0,.553-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.5,13c0-2.7568,2.2432-5,5-5,.9147,0,1.7616.2649,2.5.6956v-1.9456c0-1.5181-1.23-2.75-2.75-2.75H3.75c-1.519,0-2.75,1.2319-2.75,2.75v6.5c0,1.5181,1.231,2.75,2.75,2.75h6.694c-.543-.8274-.944-1.8289-.944-3Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SuitcasePin;
