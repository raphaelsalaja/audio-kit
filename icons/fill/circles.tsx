import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles({
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
          d="M12.741,5.26c-.748-2.462-3.037-4.26-5.741-4.26C3.691,1,1,3.691,1,7c0,2.703,1.797,4.993,4.259,5.74,.748,2.462,3.037,4.26,5.741,4.26,3.309,0,6-2.691,6-6,0-2.703-1.797-4.993-4.259-5.74ZM2.5,7c0-2.481,2.019-4.5,4.5-4.5,1.76,0,3.271,1.025,4.01,2.5-.003,0-.007,0-.01,0-3.309,0-6,2.691-6,6,0,.003,0,.007,0,.01-1.476-.739-2.5-2.25-2.5-4.01ZM11,15.5c-1.76,0-3.271-1.025-4.01-2.5,.003,0,.007,0,.01,0,3.309,0,6-2.691,6-6,0-.003,0-.007,0-.01,1.476,.739,2.5,2.25,2.5,4.01,0,2.481-2.019,4.5-4.5,4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Circles;
