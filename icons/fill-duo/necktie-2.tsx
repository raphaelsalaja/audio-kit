import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Necktie2({
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
          d="M12.9026 13.845C12.8978 13.747 12.8847 13.6488 12.8631 13.5513L10.8077 5.38762L11.0271 5.05902L14.6552 10.3942C15.1274 11.0886 15.0406 12.0219 14.4446 12.6161C14.4245 12.6362 14.4033 12.655 14.381 12.6727L12.9026 13.845Z"
          fill={fill}
        />
        <path
          d="M7.26786 5.08729C7.34412 4.74414 7.64848 4.5 8 4.5H10C10.3515 4.5 10.6559 4.74414 10.7321 5.08729L12.8632 13.5513C12.9924 14.1348 12.816 14.7446 12.3924 15.1683L10.2374 17.3233C9.55388 18.0068 8.44559 18.0078 7.76216 17.3228L5.60769 15.1683C5.184 14.7446 5.0075 14.1353 5.13678 13.5518L7.26786 5.08729Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.44321 0.54518C7.09305 0.278101 7.96223 0.0379944 8.99999 0.0379944C10.038 0.0379944 10.9072 0.278192 11.5571 0.545328C12.5508 0.953077 12.8913 2.13893 12.3873 3.02182L10.6512 5.62216C10.5176 5.85581 10.2691 6 10 6H8C7.73099 6 7.48258 5.85593 7.349 5.62243C6.85291 4.75527 6.1078 3.88906 5.61267 3.02185C5.1086 2.13887 5.44925 0.952794 6.44321 0.54518Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 5.25C7 4.83579 7.33579 4.5 7.75 4.5H10.25C10.6642 4.5 11 4.83579 11 5.25C11 5.66421 10.6642 6 10.25 6H7.75C7.33579 6 7 5.66421 7 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Necktie2;
