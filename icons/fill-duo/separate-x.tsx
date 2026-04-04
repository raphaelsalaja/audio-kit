import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SeparateX({
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
          d="M7.25 2C6.836 2 6.5 2.336 6.5 2.75V15.25C6.5 15.664 6.836 16 7.25 16C7.664 16 8 15.664 8 15.25V2.75C8 2.336 7.664 2 7.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.75 2C10.336 2 10 2.336 10 2.75V15.25C10 15.664 10.336 16 10.75 16C11.164 16 11.5 15.664 11.5 15.25V2.75C11.5 2.336 11.164 2 10.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.78 5.96999C4.487 5.67699 4.012 5.67699 3.719 5.96999L1.219 8.46999C0.926002 8.76299 0.926002 9.23803 1.219 9.53103L3.719 12.031C3.865 12.177 4.057 12.251 4.249 12.251C4.441 12.251 4.633 12.178 4.779 12.031C5.072 11.738 5.072 11.263 4.779 10.97L2.809 9.00002L4.779 7.03005C5.072 6.73705 5.072 6.26202 4.779 5.96902L4.78 5.96999Z"
          fill={fill}
        />
        <path
          d="M14.28 5.96999C13.987 5.67699 13.512 5.67699 13.219 5.96999C12.926 6.26299 12.926 6.73803 13.219 7.03103L15.189 9.001L13.219 10.971C12.926 11.264 12.926 11.739 13.219 12.032C13.365 12.178 13.557 12.252 13.749 12.252C13.941 12.252 14.133 12.179 14.279 12.032L16.779 9.53201C17.072 9.23901 17.072 8.76397 16.779 8.47097L14.279 5.97097L14.28 5.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SeparateX;
