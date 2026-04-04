import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MachineWash({
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
          d="M12.702 6.27103C13.292 6.98103 14.132 7.38703 15.056 7.43803L16.474 8.20603L15.954 12.574C15.79 13.957 14.617 14.999 13.224 14.999H4.776C3.384 14.999 2.21 13.957 2.046 12.574L1.526 8.20603L2.945 7.44003C3.83 7.40703 4.71 6.97703 5.299 6.27003C5.441 6.09903 5.653 6.00003 5.875 6.00003C6.097 6.00003 6.307 6.09803 6.45 6.26803C7.021 6.95003 7.823 7.36803 8.708 7.44603C9.593 7.52503 10.456 7.25203 11.137 6.68103C11.285 6.55703 11.424 6.41903 11.549 6.26903C11.6912 6.09995 11.905 6.00003 12.126 6.00003C12.349 6.00003 12.56 6.09903 12.702 6.27103Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.66135 3.00526C2.07266 2.95629 2.44579 3.25003 2.49475 3.66134L3.53472 12.3972C3.60986 13.0263 4.14332 13.5 4.77601 13.5H13.224C13.8567 13.5 14.3901 13.0265 14.4653 12.3973L15.5053 3.66134C15.5542 3.25003 15.9274 2.95629 16.3387 3.00526C16.75 3.05423 17.0437 3.42735 16.9948 3.83866L15.9548 12.5747C15.7898 13.9574 14.6173 15 13.224 15H4.77601C3.38276 15 2.21023 13.9576 2.04528 12.5748L1.00527 3.83866C0.956306 3.42735 1.25004 3.05422 1.66135 3.00526Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MachineWash;
