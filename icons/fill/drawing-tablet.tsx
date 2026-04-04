import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawingTablet({
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
          d="M17.3498 1.70131C16.6528 1.00431 15.5168 1.00431 14.8198 1.70131L10.0377 6.48338C9.23769 7.28338 9.18169 9.26838 9.17769 9.49238C9.17669 9.59438 9.21569 9.69238 9.28769 9.76338C9.35769 9.83338 9.45369 9.87338 9.55269 9.87338C9.77669 9.86938 11.7667 9.81338 12.5677 9.01338L17.3498 4.23131C18.0478 3.53331 18.0478 2.39831 17.3498 1.70131Z"
          fill={secondaryfill}
        />
        <path
          d="M10.3998 4H6.25C5.561 4 5 4.561 5 5.25V12.75C5 13.439 5.561 14 6.25 14H13.75C14.439 14 15 13.439 15 12.75V8.70239L17 6.70239V13.25C17 14.767 15.767 16 14.25 16H3.75C2.233 16 1 14.767 1 13.25V4.75C1 3.233 2.233 2 3.75 2H12.3998L10.3998 4ZM3 10C3.55228 10 4 9.55228 4 9C4 8.44772 3.55228 8 3 8C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DrawingTablet;
