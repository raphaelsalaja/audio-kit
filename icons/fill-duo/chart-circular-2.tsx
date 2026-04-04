import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCircular2({
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
          d="M7.97786 1.78183C8.07754 2.18387 7.83242 2.59059 7.43038 2.69027C4.59871 3.39229 2.5 5.95201 2.5 9C2.5 12.048 4.59871 14.6077 7.43038 15.3097C7.83242 15.4094 8.07754 15.8161 7.97786 16.2182C7.87819 16.6202 7.47147 16.8653 7.06942 16.7657C3.58449 15.9017 1 12.7536 1 9C1 5.2464 3.58449 2.09832 7.06942 1.23434C7.47147 1.13467 7.87819 1.37979 7.97786 1.78183Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.022 1.78188C10.1217 1.37983 10.5284 1.13468 10.9304 1.23433C13.7982 1.94511 16.0549 4.20079 16.7658 7.06961C16.8654 7.47166 16.6202 7.87835 16.2182 7.97799C15.8161 8.07762 15.4094 7.83246 15.3098 7.4304C14.7327 5.10161 12.8977 3.2673 10.5696 2.69028C10.1675 2.59063 9.92237 2.18393 10.022 1.78188Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.2183 10.0218C16.6203 10.1214 16.8655 10.5281 16.7659 10.9301C16.0551 13.7994 13.7978 16.0556 10.9294 16.766C10.5274 16.8656 10.1207 16.6204 10.0211 16.2183C9.92152 15.8162 10.1667 15.4096 10.5688 15.31C12.8974 14.7332 14.7329 12.8986 15.3099 10.5694C15.4095 10.1674 15.8162 9.9222 16.2183 10.0218Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartCircular2;
