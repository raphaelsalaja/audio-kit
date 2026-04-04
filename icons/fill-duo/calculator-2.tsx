import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Calculator2({
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
          d="M5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75V4.5H2.25C1.83579 4.5 1.5 4.83579 1.5 5.25C1.5 5.66421 1.83579 6 2.25 6H4V7.75C4 8.16421 4.33579 8.5 4.75 8.5C5.16421 8.5 5.5 8.16421 5.5 7.75V6H7.25C7.66421 6 8 5.66421 8 5.25C8 4.83579 7.66421 4.5 7.25 4.5H5.5V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.29827 11.7443C7.59117 11.4514 7.59117 10.9766 7.29827 10.6837C7.00538 10.3908 6.53051 10.3908 6.23761 10.6837L4.74994 12.1713L3.26226 10.6837C2.96937 10.3908 2.4945 10.3908 2.2016 10.6837C1.90871 10.9766 1.90871 11.4514 2.2016 11.7443L3.68928 13.232L2.2016 14.7197C1.90871 15.0126 1.90871 15.4874 2.2016 15.7803C2.4945 16.0732 2.96937 16.0732 3.26226 15.7803L4.74994 14.2927L6.23761 15.7803C6.53051 16.0732 7.00538 16.0732 7.29827 15.7803C7.59117 15.4874 7.59117 15.0126 7.29827 14.7197L5.8106 13.232L7.29827 11.7443Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 5.25C10 4.83579 10.3358 4.5 10.75 4.5H15.75C16.1642 4.5 16.5 4.83579 16.5 5.25C16.5 5.66421 16.1642 6 15.75 6H10.75C10.3358 6 10 5.66421 10 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 11.75C10 11.3358 10.3358 11 10.75 11H15.75C16.1642 11 16.5 11.3358 16.5 11.75C16.5 12.1642 16.1642 12.5 15.75 12.5H10.75C10.3358 12.5 10 12.1642 10 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10 14.75C10 14.3358 10.3358 14 10.75 14H15.75C16.1642 14 16.5 14.3358 16.5 14.75C16.5 15.1642 16.1642 15.5 15.75 15.5H10.75C10.3358 15.5 10 15.1642 10 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Calculator2;
