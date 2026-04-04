import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting5({
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
          d="M1 10.25C1 9.83579 1.33579 9.5 1.75 9.5H3.83691C4.25112 9.5 4.58691 9.83579 4.58691 10.25C4.58691 10.6642 4.25112 11 3.83691 11H1.75C1.33579 11 1 10.6642 1 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H16.25C16.6642 12.5 17 12.8358 17 13.25C17 13.6642 16.6642 14 16.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 16.25C1 15.8358 1.33579 15.5 1.75 15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H1.75C1.33579 17 1 16.6642 1 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.3057 1.63367C13.1506 0.788777 14.5214 0.788777 15.3663 1.63367C16.2112 2.47856 16.2112 3.84944 15.3663 4.69433L10.1163 9.94433C9.82436 10.2363 9.44403 10.4192 9.10609 10.5397C8.75762 10.6639 8.38862 10.7444 8.06378 10.7976C7.73622 10.8513 7.43588 10.8801 7.21826 10.8956C7.10889 10.9034 7.01903 10.9079 6.95539 10.9105C6.71592 10.9203 6.48131 10.87 6.30563 10.6943C6.12768 10.5164 6.07961 10.2861 6.08947 10.0446C6.09207 9.98096 6.0966 9.8911 6.10438 9.78173C6.11988 9.56411 6.14868 9.26377 6.20236 8.93621C6.2556 8.61137 6.33606 8.24237 6.46029 7.8939C6.58077 7.55596 6.7637 7.17563 7.05566 6.88367L12.3057 1.63367Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PenWriting5;
