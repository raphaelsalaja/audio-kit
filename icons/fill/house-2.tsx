import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House2({
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
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V14.25C16 15.7692 14.7692 17 13.25 17H9.75V13.75C9.75 13.3358 9.41421 13 9 13C8.58579 13 8.25 13.3358 8.25 13.75V17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default House2;
