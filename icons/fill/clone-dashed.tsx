import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneDashed({
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
          d="M8.75 16.5H7.75C6.2334 16.5 5 15.2666 5 13.75V12.25C5 11.8359 5.3359 11.5 5.75 11.5C6.1641 11.5 6.5 11.8359 6.5 12.25V13.75C6.5 14.4395 7.0605 15 7.75 15H8.75C9.1641 15 9.5 15.3359 9.5 15.75C9.5 16.1641 9.1641 16.5 8.75 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 16.5H12.75C12.3359 16.5 12 16.1641 12 15.75C12 15.3359 12.3359 15 12.75 15H13.75C14.4395 15 15 14.4395 15 13.75V12.75C15 12.3359 15.3359 12 15.75 12C16.1641 12 16.5 12.3359 16.5 12.75V13.75C16.5 15.2666 15.2666 16.5 13.75 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75 9.5C15.3359 9.5 15 9.1641 15 8.75V7.75C15 7.0605 14.4395 6.5 13.75 6.5H12.25C11.8359 6.5 11.5 6.1641 11.5 5.75C11.5 5.3359 11.8359 5 12.25 5H13.75C15.2666 5 16.5 6.2334 16.5 7.75V8.75C16.5 9.1641 16.1641 9.5 15.75 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M10.25 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.25C1.5 11.7688 2.73122 13 4.25 13H10.25C11.7688 13 13 11.7688 13 10.25V4.25C13 2.73122 11.7688 1.5 10.25 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneDashed;
