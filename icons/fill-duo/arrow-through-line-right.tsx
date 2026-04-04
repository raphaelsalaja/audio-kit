import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineRight({
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
          d="M8.25 16C7.836 16 7.5 15.664 7.5 15.25V12C7.5 11.586 7.836 11.25 8.25 11.25C8.664 11.25 9 11.586 9 12V15.25C9 15.664 8.664 16 8.25 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25 9.75C7.836 9.75 7.5 9.414 7.5 9V2.75C7.5 2.336 7.836 2 8.25 2C8.664 2 9 2.336 9 2.75V9C9 9.414 8.664 9.75 8.25 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.28 4.96999C11.987 4.67699 11.512 4.67699 11.219 4.96999C10.926 5.26299 10.926 5.738 11.219 6.031L13.439 8.251H2.25C1.836 8.251 1.5 8.587 1.5 9.001C1.5 9.415 1.836 9.751 2.25 9.751H13.439L11.219 11.971C10.926 12.264 10.926 12.739 11.219 13.032C11.365 13.178 11.557 13.252 11.749 13.252C11.941 13.252 12.133 13.179 12.279 13.032L15.779 9.53199C16.072 9.23899 16.072 8.76399 15.779 8.47099L12.279 4.97099L12.28 4.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineRight;
