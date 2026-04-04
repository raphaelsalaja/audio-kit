import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerReplace({
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
          d="M14.25 7H9.25C8.00736 7 7 8.00736 7 9.25V14.25C7 15.4926 8.00736 16.5 9.25 16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25V9.25C16.5 8.00736 15.4926 7 14.25 7Z"
          fill={fill}
        />
        <path
          d="M5.25 15C4.01 15 3 13.991 3 12.75C3 12.336 2.664 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 14.818 3.183 16.5 5.25 16.5C5.664 16.5 6 16.164 6 15.75C6 15.336 5.664 15 5.25 15Z"
          fill={secondaryfill}
        />
        <path
          d="M12.75 3C13.99 3 15 4.009 15 5.25C15 5.664 15.336 6 15.75 6C16.164 6 16.5 5.664 16.5 5.25C16.5 3.182 14.817 1.5 12.75 1.5C12.336 1.5 12 1.836 12 2.25C12 2.664 12.336 3 12.75 3Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 3C3.33621 3 3 3.33621 3 3.75V8.75C3 9.16379 3.33621 9.5 3.75 9.5H4.75C5.16421 9.5 5.5 9.83579 5.5 10.25C5.5 10.6642 5.16421 11 4.75 11H3.75C2.50779 11 1.5 9.99221 1.5 8.75V3.75C1.5 2.50779 2.50779 1.5 3.75 1.5H8.75C9.99221 1.5 11 2.50779 11 3.75V4.75C11 5.16421 10.6642 5.5 10.25 5.5C9.83579 5.5 9.5 5.16421 9.5 4.75V3.75C9.5 3.33621 9.16379 3 8.75 3H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LayerReplace;
