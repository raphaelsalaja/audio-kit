import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading4({
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
          d="M1.75 4C2.16421 4 2.5 4.33579 2.5 4.75V8.25001L7 8.25V4.75C7 4.33579 7.33579 4 7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V9.75L2.5 9.75001V13.25C2.5 13.6642 2.16421 14 1.75 14C1.33579 14 1 13.6642 1 13.25V4.75C1 4.33579 1.33579 4 1.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.2496 4.04275C15.5495 4.14858 15.75 4.43201 15.75 4.75V10H16.691C17.1052 10 17.441 10.3358 17.441 10.75C17.441 11.1642 17.1052 11.5 16.691 11.5H15.75V13.25C15.75 13.6642 15.4142 14 15 14C14.5858 14 14.25 13.6642 14.25 13.25V11.5H10.25C9.83579 11.5 9.5 11.1642 9.5 10.75V10.641C9.5 10.4697 9.55863 10.3036 9.66615 10.1702L14.4162 4.27923C14.6157 4.03169 14.9498 3.93692 15.2496 4.04275ZM14.25 10V6.87502L11.7303 10H14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading4;
