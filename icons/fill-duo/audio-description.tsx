import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AudioDescription({
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
          d="M14.25 1.5H3.75C2.2334 1.5 1 2.7334 1 4.25V11.25C1 12.7666 2.2334 14 3.75 14H5V16.25C5 16.5381 5.165 16.8013 5.4253 16.9258C5.5283 16.9756 5.6397 17 5.75 17C5.917 17 6.083 16.9443 6.2188 16.8354L9.7632 14H14.25C15.7666 14 17 12.7666 17 11.25V4.25C17 2.7334 15.7666 1.5 14.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12 4.5H10.25C9.8359 4.5 9.5 4.8359 9.5 5.25V10.25C9.5 10.6641 9.8359 11 10.25 11H12C13.3784 11 14.5 9.8784 14.5 8.5V7C14.5 5.6216 13.3784 4.5 12 4.5ZM13 8.5C13 9.0513 12.5513 9.5 12 9.5H11V6H12C12.5513 6 13 6.4487 13 7V8.5Z"
          fill={fill}
        />
        <path
          d="M7.57179 5.4326C7.32959 4.6211 6.81109 4.5 6.52349 4.5H5.97659C5.79809 4.5 5.16119 4.5688 4.92679 5.438L3.59279 10.041C3.47759 10.4389 3.70659 10.855 4.10399 10.9702C4.50149 11.0859 4.91849 10.8574 5.03319 10.459L5.16639 10H7.33379L7.46679 10.459C7.56149 10.7871 7.86129 11 8.18649 11C8.25579 11 8.32609 10.9907 8.39599 10.9702C8.79349 10.855 9.02249 10.439 8.90719 10.041L7.57179 5.4326ZM5.60189 8.5L6.25099 6.2637L6.89909 8.5H5.60189Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AudioDescription;
