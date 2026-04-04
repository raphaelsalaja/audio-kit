import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Armchair({
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
          d="M3 3.75C3 2.23079 4.23079 1 5.75 1H12.25C13.7692 1 15 2.23079 15 3.75V13C15 13.4142 14.6642 13.75 14.25 13.75H3.75C3.33579 13.75 3 13.4142 3 13V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.75 6C13.51 6 12.5 7.009 12.5 8.25V11.5H5.5V8.25C5.5 7.009 4.49 6 3.25 6C2.01 6 1 7.009 1 8.25C1 9.028 1.398 9.715 2 10.119V12.25C2 13.681 3.102 14.846 4.5 14.975V16.25C4.5 16.664 4.836 17 5.25 17C5.664 17 6 16.664 6 16.25V15H12V16.25C12 16.664 12.336 17 12.75 17C13.164 17 13.5 16.664 13.5 16.25V14.975C14.898 14.847 16 13.681 16 12.25V10.119C16.602 9.715 17 9.028 17 8.25C17 7.009 15.99 6 14.75 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Armchair;
