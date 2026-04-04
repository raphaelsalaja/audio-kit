import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMaximizeDiagonal({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M4 12.382V11L12 7V10L5.44721 13.2764C4.78231 13.6088 4 13.1253 4 12.382Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 18V15L20 19V20.382C20 21.1253 19.2177 21.6088 18.5528 21.2764L12 18Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M4 11L12 7" stroke={fill} />
        <path
          d="M12 17.382V15.618C12 15.2393 12.214 14.893 12.5528 14.7236L18.5528 11.7236C19.2177 11.3912 20 11.8747 20 12.618V20.382C20 21.1253 19.2177 21.6088 18.5528 21.2764L12.5528 18.2764C12.214 18.107 12 17.7607 12 17.382Z"
          stroke={fill}
        />
        <path
          d="M4 12.382V4.61803C4 3.87465 4.78231 3.39116 5.44721 3.72361L11.4472 6.72361C11.786 6.893 12 7.23926 12 7.61803V9.38197C12 9.76074 11.786 10.107 11.4472 10.2764L5.44721 13.2764C4.78231 13.6088 4 13.1253 4 12.382Z"
          stroke={fill}
        />
        <path d="M20 19L12 15" stroke={fill} />
      </g>
    </svg>
  );
}

export default ChevronMaximizeDiagonal;
