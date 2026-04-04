import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key({
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
          d="M6.64636 12.3536C6.64636 12.9056 6.19866 13.3536 5.64636 13.3536C5.09406 13.3536 4.64636 12.9056 4.64636 12.3536C4.64636 11.8016 5.09406 11.3536 5.64636 11.3536C6.19866 11.3536 6.64636 11.8016 6.64636 12.3536Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.4216 2.75L7.27299 7.8984C6.9446 7.8112 6.6059 7.75 6.25 7.75C4.0408 7.75 2.25 9.5408 2.25 11.75C2.25 13.9592 4.0408 15.75 6.25 15.75C8.4592 15.75 10.25 13.959 10.25 11.75C10.25 11.394 10.1887 11.0554 10.1014 10.7271L12.25 8.5789V6.5074H14.321L15.25 5.5784V2.75H12.4216Z"
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

export default Key;
