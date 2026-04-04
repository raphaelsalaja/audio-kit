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
          d="M12.4216 2.75L7.27299 7.8984C6.9446 7.8112 6.6059 7.75 6.25 7.75C4.0408 7.75 2.25 9.5408 2.25 11.75C2.25 13.9592 4.0408 15.75 6.25 15.75C8.4592 15.75 10.25 13.959 10.25 11.75C10.25 11.394 10.1887 11.0554 10.1014 10.7271L12.25 8.5789V6.5074H14.321L15.25 5.5784V2.75H12.4216Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.35348 11.6465C6.74378 12.0368 6.74398 12.6702 6.35348 13.0607C5.96298 13.4512 5.32958 13.451 4.93928 13.0607C4.54898 12.6704 4.54878 12.037 4.93928 11.6465C5.32978 11.256 5.96318 11.2562 6.35348 11.6465Z"
          fill={fill}
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
