import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VirtualSpace({
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
          d="M5.7471 11.7388H1.75C1.3359 11.7388 1 11.4029 1 10.9888V5C1 2.939 5.147 2 9 2C12.853 2 17 2.939 17 5V10.75C17 11.147 16.6909 11.4751 16.2949 11.4985L12.2978 11.7373C12.2416 11.7397 12.1894 11.7373 12.1372 11.73C10.187 11.4243 7.81689 11.4243 5.86279 11.73C5.82469 11.7359 5.7857 11.7388 5.7471 11.7388Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.86571 6.271C3.42721 5.8906 1.7882 4.8 1.3251 4.062C1.168 4.2634 1 4.5859 1 5V13C1 14.7666 3.90229 15.4834 5.63229 15.7534C5.67089 15.7593 5.7094 15.7622 5.748 15.7622C5.9257 15.7622 6.09909 15.6992 6.23579 15.582C6.40229 15.4394 6.498 15.2314 6.498 15.0122L6.5 7.0122C6.5 6.6426 6.23101 6.3281 5.86571 6.271Z"
          fill={fill}
        />
        <path
          d="M12.1343 6.271C14.5728 5.8906 16.2118 4.8 16.6749 4.062C16.832 4.2634 17 4.5859 17 5V13C17 14.7666 14.0977 15.4834 12.3677 15.7534C12.3291 15.7593 12.2906 15.7622 12.252 15.7622C12.0743 15.7622 11.9009 15.6992 11.7642 15.582C11.5977 15.4394 11.502 15.2314 11.502 15.0122L11.5 7.0122C11.5 6.6426 11.769 6.3281 12.1343 6.271Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VirtualSpace;
