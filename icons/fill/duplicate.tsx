import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Duplicate({
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
          d="M13.75 4.5H7.25C5.73122 4.5 4.5 5.73122 4.5 7.25V13.75C4.5 15.2688 5.73122 16.5 7.25 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.25C16.5 5.73122 15.2688 4.5 13.75 4.5Z"
          fill={fill}
        />
        <path
          d="M3.5664 3.54393L10.4902 2.5146C10.998 2.4399 11.4931 2.67872 11.7529 3.12642C11.9609 3.48482 12.4218 3.60641 12.7773 3.39891C13.1357 3.19091 13.2578 2.73192 13.0498 2.37352C12.4805 1.39112 11.3896 0.863702 10.2695 1.0312L3.3466 2.0605C2.62 2.1679 1.97839 2.55221 1.54089 3.14201C1.10439 3.73231 0.922694 4.45742 1.03019 5.18452L2.0077 11.7651C2.0634 12.1372 2.3837 12.4047 2.7489 12.4047C2.786 12.4047 2.8231 12.4023 2.8602 12.3964C3.2694 12.3359 3.5526 11.954 3.492 11.5443L2.51449 4.96422C2.46469 4.63312 2.5477 4.30361 2.7469 4.03551C2.9451 3.76741 3.2364 3.59273 3.5664 3.54393Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Duplicate;
