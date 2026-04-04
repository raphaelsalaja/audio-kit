import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag({
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
          d="M14.598 2.57499C14.351 2.44599 14.053 2.46499 13.822 2.62399C12.822 3.31899 11.894 3.60799 11.084 3.48299C10.426 3.38199 9.975 3.03899 9.453 2.64199C8.855 2.18699 8.179 1.67199 7.146 1.51399C6.142 1.35899 5.086 1.61099 4 2.21899V10.48C4.06 10.458 4.125 10.455 4.179 10.418C5.178 9.72299 6.102 9.43299 6.917 9.55899C7.573 9.65999 8.023 10.002 8.544 10.398C9.142 10.853 9.82 11.369 10.856 11.527C11.057 11.558 11.26 11.573 11.466 11.573C12.495 11.573 13.573 11.185 14.679 10.417C14.88 10.277 15 10.047 15 9.80099V3.23999C15 2.96099 14.845 2.70399 14.598 2.57499Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 1.25C4.16421 1.25 4.5 1.58579 4.5 2V16C4.5 16.4142 4.16421 16.75 3.75 16.75C3.33579 16.75 3 16.4142 3 16V2C3 1.58579 3.33579 1.25 3.75 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flag;
