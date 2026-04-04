import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrinkSlash({
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
          d="M8.25 10H5V14H8.25C8.664 14 9 13.664 9 13.25V10.75C9 10.336 8.664 10 8.25 10Z"
          fill={fill}
        />
        <path
          d="M12.5 10V15.75C12.5 15.888 12.388 16 12.25 16H5.75C5.612 16 5.5 15.888 5.5 15.75V10C5.5 7.91 7.192 7.525 7.379 7.489C7.738 7.426 8 7.114 8 6.75V5H10V6.75C10 7.11 10.262 7.42 10.615 7.488C10.637 7.492 10.74 7.515 10.886 7.568C11.274 7.71 11.706 7.508 11.846 7.118C11.974 6.765 11.821 6.378 11.5 6.204V2.25C11.5 1.285 10.715 0.5 9.75 0.5H8.25C7.285 0.5 6.5 1.285 6.5 2.25V6.189C5.405 6.615 4 7.741 4 10V15.75C4 16.715 4.785 17.5 5.75 17.5H12.25C13.215 17.5 14 16.715 14 15.75L14 9.99999C14 9.61096 13.9586 9.25199 13.8821 8.92171C13.7886 8.51819 13.3857 8.26685 12.9821 8.36034C12.5786 8.45383 12.3273 8.85673 12.4208 9.26026C12.47 9.47299 12.5 9.71802 12.5 10Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default DrinkSlash;
