import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House9({
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
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V14.25C16 15.7692 14.7692 17 13.25 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628ZM6.87933 11.6217C6.58644 11.3288 6.11156 11.3288 5.81867 11.6217C5.52578 11.9146 5.52578 12.3894 5.81867 12.6823C7.57556 14.4392 10.4254 14.4392 12.1823 12.6823C12.4752 12.3894 12.4752 11.9146 12.1823 11.6217C11.8894 11.3288 11.4146 11.3288 11.1217 11.6217C9.95056 12.7928 8.05044 12.7928 6.87933 11.6217Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default House9;
