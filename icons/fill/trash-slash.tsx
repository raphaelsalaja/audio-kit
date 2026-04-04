import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrashSlash({
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
        <path d="M12.9855 5H3.40771L3.88662 14.0894L12.9855 5Z" fill={fill} />
        <path
          d="M4.85718 16.3242C5.33998 16.7417 5.96308 17 6.64848 17H11.3526C12.8165 17 14.0225 15.853 14.0987 14.3896L14.5051 6.67676L4.85718 16.3242Z"
          fill={fill}
        />
        <path
          d="M2.75 5.5H12.4849L13.9865 4H12V2.75C12 1.7852 11.2148 1 10.25 1H7.75C6.7852 1 6 1.7852 6 2.75V4H2.75C2.3359 4 2 4.3359 2 4.75C2 5.1641 2.3359 5.5 2.75 5.5ZM7.5 2.75C7.5 2.6143 7.6143 2.5 7.75 2.5H10.25C10.3857 2.5 10.5 2.6143 10.5 2.75V4H7.5V2.75Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.6801 1.46999 16.53C1.17699 16.24 1.17699 15.76 1.46999 15.4699L15.47 1.46987C15.763 1.17997 16.238 1.17997 16.531 1.46987C16.824 1.75987 16.824 2.23995 16.531 2.53005L2.52999 16.53C2.38399 16.68 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TrashSlash;
