import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DuplicatePlus2({
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
          d="M10.75 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.75C1.5 12.2688 2.73122 13.5 4.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V4.25C13.5 2.73122 12.2688 1.5 10.75 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.5 4.25V10.75C13.5 12.2666 12.2666 13.5 10.75 13.5H4.9458L5.10019 14.5391C5.32309 16.0391 6.72429 17.0779 8.22449 16.855L14.6539 15.8999C16.154 15.677 17.1928 14.2756 16.9699 12.7756L16.0147 6.34619C15.8212 5.04399 14.739 4.09199 13.4756 4.00879C13.4827 4.08939 13.5 4.1675 13.5 4.25Z"
          fill={fill}
        />
        <path
          d="M7.5 4.5C7.9141 4.5 8.25 4.8359 8.25 5.25V9.75C8.25 10.1641 7.9141 10.5 7.5 10.5C7.0859 10.5 6.75 10.1641 6.75 9.75V5.25C6.75 4.8359 7.0859 4.5 7.5 4.5Z"
          fill={fill}
        />
        <path
          d="M5.25 6.75H9.75C10.1641 6.75 10.5 7.0859 10.5 7.5C10.5 7.9141 10.1641 8.25 9.75 8.25H5.25C4.8359 8.25 4.5 7.9141 4.5 7.5C4.5 7.0859 4.8359 6.75 5.25 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DuplicatePlus2;
