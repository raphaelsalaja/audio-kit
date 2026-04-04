import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeCustom({
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
          d="M12.397 2.947L12.62 6.334L16.481 6.939C17.019 7.024 17.186 7.573 16.754 7.844L12.113 10.762L10.891 15.13C10.731 15.48 10.317 15.634 9.96601 15.474C9.93001 15.458 9.89601 15.438 9.86301 15.416L6.80501 13.438L2.42001 15.141C1.86601 15.357 1.28801 14.881 1.57501 14.443L4.03501 10.665L2.09701 7.596C1.90001 7.284 2.14401 6.908 2.57701 6.858L7.62801 6.273L11.258 2.654C11.626 2.286 12.366 2.477 12.397 2.947Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.397 2.947L12.62 6.334L16.481 6.939C17.019 7.024 17.186 7.573 16.754 7.844L12.113 10.762L10.891 15.13C10.731 15.48 10.317 15.634 9.96601 15.474C9.93001 15.458 9.89601 15.438 9.86301 15.416L6.80501 13.438L2.42001 15.141C1.86601 15.357 1.28801 14.881 1.57501 14.443L4.03501 10.665L2.09701 7.596C1.90001 7.284 2.14401 6.908 2.57701 6.858L7.62801 6.273L11.258 2.654C11.626 2.286 12.366 2.477 12.397 2.947Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ShapeCustom;
