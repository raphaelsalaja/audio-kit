import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack4({
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
          d="M4.65081 5.7385L4.0829 1.8208C4.0392 1.5193 4.273 1.2491 4.5777 1.2491H6.5838C6.825 1.2491 7.0318 1.4213 7.0755 1.6584L7.49781 3.9483"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5022 3.94819L10.9245 1.65829C10.9682 1.42109 11.175 1.24899 11.4162 1.24899H13.4223C13.727 1.24899 13.9608 1.51919 13.9171 1.82069L13.3491 5.73849"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 11.75H11.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 16.25V11C6.25 9.4812 7.4812 8.25 9 8.25C10.5188 8.25 11.75 9.4812 11.75 11V16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.75C12.176 3.75 14.75 6.324 14.75 9.5V14.25C14.75 15.355 13.855 16.25 12.75 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V9.5C3.25 6.324 5.824 3.75 9 3.75Z"
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

export default Backpack4;
