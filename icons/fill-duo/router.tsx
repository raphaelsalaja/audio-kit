import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Router({
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
          d="M1 13.25C1 11.4548 2.45479 10 4.25 10H13.75C15.5452 10 17 11.4548 17 13.25C17 15.0452 15.5452 16.5 13.75 16.5H4.25C2.45479 16.5 1 15.0452 1 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 14C4.664 14 5 13.664 5 13.25C5 12.836 4.664 12.5 4.25 12.5C3.836 12.5 3.5 12.836 3.5 13.25C3.5 13.664 3.836 14 4.25 14Z"
          fill={fill}
        />
        <path
          d="M6.75 14C7.164 14 7.5 13.664 7.5 13.25C7.5 12.836 7.164 12.5 6.75 12.5C6.336 12.5 6 12.836 6 13.25C6 13.664 6.336 14 6.75 14Z"
          fill={fill}
        />
        <path
          d="M8.92153 0.610875C9.21442 0.903768 9.21442 1.37864 8.92153 1.67153C7.36042 3.23264 7.36042 5.76727 8.92153 7.32837C9.21442 7.62127 9.21442 8.09614 8.92153 8.38903C8.62864 8.68193 8.15376 8.68193 7.86087 8.38903C5.71398 6.24214 5.71398 2.75777 7.86087 0.610875C8.15376 0.317982 8.62864 0.317982 8.92153 0.610875Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5785 0.610966C14.8714 0.318073 15.3462 0.318073 15.6391 0.610966C17.786 2.75786 17.786 6.24223 15.6391 8.38913C15.3462 8.68202 14.8714 8.68202 14.5785 8.38913C14.2856 8.09623 14.2856 7.62136 14.5785 7.32847C16.1396 5.76736 16.1396 3.23273 14.5785 1.67163C14.2856 1.37873 14.2856 0.903859 14.5785 0.610966Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 4.49995C9.75 3.39578 10.6458 2.49995 11.75 2.49995C12.8542 2.49995 13.75 3.39578 13.75 4.49995C13.75 5.33893 13.2328 6.05763 12.5 6.35446V10H11V6.35446C10.2672 6.05763 9.75 5.33893 9.75 4.49995Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Router;
