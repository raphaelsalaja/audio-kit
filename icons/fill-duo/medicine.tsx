import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Medicine({
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
          d="M15.182 8.81802C16.9393 10.5753 16.9394 13.4246 15.182 15.182C13.4246 16.9394 10.5753 16.9393 8.81802 15.182L15.182 8.81802Z"
          fill={fill}
        />
        <path
          d="M8.81802 8.81803C10.5754 7.06064 13.4247 7.06073 15.182 8.81803L8.81802 15.182C7.06072 13.4247 7.06063 10.5754 8.81802 8.81803Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.9629 2.56225C10.5372 1.13655 8.2338 1.14562 6.81174 2.56762L2.56768 6.81068C1.14526 8.2331 1.14378 10.5387 2.56326 11.9629C3.51274 12.9067 4.86044 13.2281 6.06924 12.9114C5.79057 11.0884 6.35324 9.16148 7.75736 7.75737C9.16142 6.35331 11.0882 5.79062 12.9112 6.06921C13.2292 4.85679 12.9131 3.51246 11.9629 2.56225Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.7644 3.76977C12.5864 3.33033 12.3192 2.91858 11.9629 2.56225C11.8321 2.4314 11.6938 2.31263 11.5495 2.20593C11.1043 1.87669 10.6016 1.66237 10.0815 1.56248C9.87734 1.52328 9.67052 1.5017 9.46341 1.49772C9.20468 1.49274 8.94551 1.51522 8.69061 1.5651C8.00223 1.69981 7.34501 2.03437 6.81174 2.56762L4.68942 4.68943L7.75736 7.75737C9.16142 6.35331 11.0882 5.79062 12.9112 6.06921C13.11 5.31145 13.061 4.50216 12.7644 3.76977Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Medicine;
