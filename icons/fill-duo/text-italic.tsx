import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextItalic({
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
          d="M12 3C12.552 3 13 2.55 13 2C13 1.45 12.552 1 12 1C11.448 1 11 1.45 11 2C11 2.55 11.448 3 12 3Z"
          fill={fill}
        />
        <path
          d="M8.25002 5C7.83581 5 7.50002 5.33579 7.50002 5.75C7.50002 6.16421 7.83581 6.5 8.25002 6.5H9.74767L7.68884 13.5H5.75C5.33579 13.5 5 13.8358 5 14.25C5 14.6642 5.33579 15 5.75 15H10.75C11.1642 15 11.5 14.6642 11.5 14.25C11.5 13.8358 11.1642 13.5 10.75 13.5H9.25238L11.4695 5.96162C11.5362 5.73486 11.4921 5.48993 11.3505 5.30068C11.2089 5.11142 10.9864 5 10.75 5H8.25002Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextItalic;
