import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Subtitles({
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
          d="M14.25 1.5H3.75C2.2334 1.5 1 2.7334 1 4.25V11.25C1 12.7666 2.2334 14 3.75 14H5V16.25C5 16.5381 5.165 16.8013 5.4248 16.9258C5.5283 16.9756 5.6396 17 5.75 17C5.917 17 6.08301 16.9443 6.21881 16.8354L9.7627 14H14.25C15.7666 14 17 12.7666 17 11.25V4.25C17 2.7334 15.7666 1.5 14.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75 8.5H4.75C4.3359 8.5 4 8.8359 4 9.25C4 9.6641 4.3359 10 4.75 10H9.75C10.1641 10 10.5 9.6641 10.5 9.25C10.5 8.8359 10.1641 8.5 9.75 8.5Z"
          fill={fill}
        />
        <path
          d="M13.25 8.5H12.25C11.8359 8.5 11.5 8.8359 11.5 9.25C11.5 9.6641 11.8359 10 12.25 10H13.25C13.6641 10 14 9.6641 14 9.25C14 8.8359 13.6641 8.5 13.25 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Subtitles;
