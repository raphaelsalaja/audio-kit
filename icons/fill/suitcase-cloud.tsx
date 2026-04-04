import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseCloud({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M14.5 10C13.1382 10 11.917 10.7993 11.3472 12.0044C10.0396 12.084 9 13.1729 9 14.5C9 15.8784 10.1216 17 11.5 17H14.5C16.4297 17 18 15.4297 18 13.5C18 11.5703 16.4297 10 14.5 10Z"
          fill={secondaryfill}
        />
        <path
          d="M7.79145 16C7.60353 15.5366 7.5 15.0303 7.5 14.5C7.5 12.6734 8.72752 11.1319 10.4013 10.6533C11.3134 9.33715 12.8289 8.5 14.5 8.5C15.4102 8.5 16.2642 8.74417 17 9.17048V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H7.79145Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseCloud;
