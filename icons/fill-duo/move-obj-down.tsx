import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDown({
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
          d="M14.25 1.5H3.75C2.7835 1.5 2 2.2835 2 3.25V4.25C2 5.2165 2.7835 6 3.75 6H14.25C15.2165 6 16 5.2165 16 4.25V3.25C16 2.2835 15.2165 1.5 14.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.72 11.97L9.74999 13.94V8.25098C9.74999 7.83698 9.41399 7.50098 8.99999 7.50098C8.58599 7.50098 8.24999 7.83698 8.24999 8.25098V13.94L6.27999 11.97C5.98699 11.677 5.51199 11.677 5.21899 11.97C4.92599 12.263 4.92599 12.738 5.21899 13.031L8.46899 16.281C8.61499 16.427 8.80699 16.501 8.99899 16.501C9.19099 16.501 9.38298 16.428 9.52898 16.281L12.779 13.031C13.072 12.738 13.072 12.263 12.779 11.97C12.486 11.677 12.011 11.677 11.718 11.97H11.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjDown;
