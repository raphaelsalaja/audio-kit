import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GlassJuice({
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
          d="M2.21342 5.226C2.35455 5.08148 2.548 5 2.75 5H9.25C9.45201 5 9.64548 5.08149 9.78661 5.22603C9.92774 5.37056 10.0046 5.56592 9.99979 5.76787L9.77278 15.2919C9.75002 16.2424 8.97279 17 8.02299 17H3.976C3.0262 17 2.24897 16.2425 2.22622 15.292L2.00021 5.76779C1.99542 5.56585 2.07229 5.37052 2.21342 5.226Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.5 3.5C13.776 3.5 14 3.724 14 4C14 5.38 12.88 6.5 11.5 6.5C11.224 6.5 11 6.276 11 6C11 4.62 12.12 3.5 13.5 3.5Z"
          fill={fill}
        />
        <path
          d="M1 1.75C1 1.33579 1.33579 1 1.75 1L4.27218 1C5.16408 1 5.9134 1.6701 6.0116 2.55723L7.1626 12.9172C7.20834 13.3289 6.91168 13.6997 6.5 13.7454C6.08832 13.7912 5.71751 13.4945 5.67177 13.0828L4.52077 2.72282C4.50678 2.59616 4.40014 2.5 4.27218 2.5L1.75 2.5C1.33579 2.5 1 2.16421 1 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2724 15.3276L11.4574 7.56578C11.7151 7.52252 11.9799 7.5 12.25 7.5C14.8742 7.5 17 9.62579 17 12.25C17 14.8742 14.8742 17 12.25 17C11.7739 17 11.3142 16.93 10.8807 16.7998C11.1191 16.3611 11.2596 15.8606 11.2724 15.3276Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GlassJuice;
