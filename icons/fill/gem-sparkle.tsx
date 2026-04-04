import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GemSparkle({
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
          d="M16.0096 2.3203L15 1.98173L14.6628 0.963857C14.5539 0.634958 14.0128 0.634958 13.9039 0.963857L13.5667 1.98173L12.5571 2.3203C12.3938 2.37512 12.2828 2.52882 12.2828 2.70294C12.2828 2.87706 12.3938 3.03077 12.5571 3.08558L13.5667 3.42416L13.9039 4.44202C13.9584 4.60647 14.111 4.71718 14.2828 4.71718C14.4546 4.71718 14.6083 4.6054 14.6617 4.44202L14.9989 3.42416L16.0085 3.08558C16.1718 3.03077 16.2828 2.87706 16.2828 2.70294C16.2828 2.52882 16.1729 2.37512 16.0096 2.3203Z"
          fill={secondaryfill}
        />
        <path
          d="M1.75 3C2.16421 3 2.5 2.66421 2.5 2.25C2.5 1.83579 2.16421 1.5 1.75 1.5C1.33579 1.5 1 1.83579 1 2.25C1 2.66421 1.33579 3 1.75 3Z"
          fill={secondaryfill}
        />
        <path
          d="M5.41101 2.5C4.92601 2.5 4.45801 2.702 4.12601 3.054L1.72301 5.61C1.14201 6.228 1.09001 7.167 1.60001 7.844L7.59301 15.8C7.92801 16.245 8.44101 16.5 9.00001 16.5C9.55901 16.5 10.072 16.245 10.407 15.8L16.4 7.844C16.6468 7.51635 16.762 7.12709 16.7493 6.74266C16.7452 6.33196 16.4102 6 15.9985 6H12.398L10.7852 2.90354C10.656 2.65555 10.3996 2.5 10.12 2.5H5.41101ZM8.99901 13.905L10.933 7.5H7.06501L8.99901 13.905ZM5.41001 4C5.33701 4 5.26701 4.03 5.21801 4.082L3.41501 6H5.60101L6.64301 4H5.41001Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GemSparkle;
