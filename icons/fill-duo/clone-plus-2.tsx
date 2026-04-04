import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClonePlus2({
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
          d="M13.75 5H7.75C6.23122 5 5 6.23122 5 7.75V13.75C5 15.2688 6.23122 16.5 7.75 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.75C16.5 6.23122 15.2688 5 13.75 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25 13H5V7.75C5 6.2334 6.2334 5 7.75 5H13V4.25C13 2.7334 11.7666 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13Z"
          fill={fill}
        />
        <path
          d="M10.75 7.75C11.1641 7.75 11.5 8.0859 11.5 8.5V13C11.5 13.4141 11.1641 13.75 10.75 13.75C10.3359 13.75 10 13.4141 10 13V8.5C10 8.0859 10.3359 7.75 10.75 7.75Z"
          fill={fill}
        />
        <path
          d="M8.5 10H13C13.4141 10 13.75 10.3359 13.75 10.75C13.75 11.1641 13.4141 11.5 13 11.5H8.5C8.0859 11.5 7.75 11.1641 7.75 10.75C7.75 10.3359 8.0859 10 8.5 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClonePlus2;
