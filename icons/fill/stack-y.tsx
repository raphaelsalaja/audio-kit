import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackY({
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
          d="M12.25 3.5H5.75C4.23122 3.5 3 4.73122 3 6.25V11.75C3 13.2688 4.23122 14.5 5.75 14.5H12.25C13.7688 14.5 15 13.2688 15 11.75V6.25C15 4.73122 13.7688 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M14.5 1.25C14.5 0.8359 14.1641 0.5 13.75 0.5H4.25C3.8359 0.5 3.5 0.8359 3.5 1.25C3.5 1.6641 3.8359 2 4.25 2H13.75C14.1641 2 14.5 1.6641 14.5 1.25Z"
          fill={secondaryfill}
        />
        <path
          d="M14.5 16.75C14.5 16.3359 14.1641 16 13.75 16H4.25C3.8359 16 3.5 16.3359 3.5 16.75C3.5 17.1641 3.8359 17.5 4.25 17.5H13.75C14.1641 17.5 14.5 17.1641 14.5 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StackY;
