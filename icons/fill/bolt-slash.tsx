import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoltSlash({
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
          d="M14.7506 6.5H14.6827L7.58095 13.6006L7.44095 15.9688C7.41555 16.3975 7.66944 16.7852 8.07274 16.9332C8.18264 16.9732 8.29585 16.9928 8.40775 16.9928C8.70515 16.9928 8.99075 16.8551 9.17775 16.6051L15.5512 8.0992C15.7792 7.7945 15.8155 7.3931 15.6451 7.0523C15.4742 6.7115 15.1319 6.5 14.7506 6.5Z"
          fill={fill}
        />
        <path
          d="M3.2494 11.5H6.496L11.4984 6.5H10.2948L10.559 2.0312C10.5844 1.6025 10.3305 1.2148 9.92721 1.0668C9.52441 0.920302 9.0791 1.0507 8.8222 1.3949L2.4492 9.9008C2.2207 10.206 2.185 10.6069 2.3554 10.9477C2.5258 11.2885 2.8686 11.5 3.2494 11.5Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BoltSlash;
