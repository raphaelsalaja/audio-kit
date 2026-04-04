import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilesPen({
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
          d="M19.8295 19.4764L19.9274 18.3459L13.0303 21.7947L12.7676 23.0074L19.8295 19.4764Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7.51367 22.5755L8.64365 20.7068L9.78437 20.8697L10.5883 22.1409L10.1972 23.2925H7.92656L7.51367 22.5755Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19.9768 14L17.5854 15.0814L19.3878 16.5233L19.7482 17.6047L20.1087 19.407L21.7791 18.686L22.5001 16.8837L21.4187 15.0814L19.9768 14Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19.3322 19.8609C19.691 19.6928 19.9277 19.295 19.9554 18.7102C20.0101 17.5588 19.2342 16.1187 18.2223 15.4937C17.6878 15.1635 17.2527 15.1434 16.8398 15.3353"
          stroke={fill}
        />
        <path
          d="M22.3818 17.4973C22.4365 16.3459 21.6605 14.9058 20.6487 14.2807C20.1142 13.9506 19.6791 13.9305 19.2662 14.1223L10.1562 18.6757C9.99507 18.7562 9.85871 18.8787 9.76149 19.0303L7.98758 21.7962C7.56072 22.4618 8.03865 23.3361 8.82934 23.3361H12.1347C12.2898 23.3361 12.4427 23.3 12.5815 23.2307L21.7586 18.6479C22.1174 18.4799 22.3541 18.082 22.3818 17.4973Z"
          stroke={fill}
        />
        <path
          d="M12.3599 23.3223C14.299 22.4139 11.8948 17.9272 9.91479 18.8473"
          stroke={fill}
        />
        <path
          d="M8.55054 20.858C9.8363 20.3631 11.206 22.0309 10.0763 23.3629"
          stroke={fill}
        />
        <path
          d="M12.6764 14.1369L9.63623 12.6169L20.4999 7.5L21.4343 8.06061C22.1117 8.46704 22.4623 9.42544 21.755 9.77736L12.6764 14.1369Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20.5 7.5L21.7111 8.10557C22.4482 8.4741 22.4482 9.5259 21.7111 9.89443L11.1708 15.1646C10.7485 15.3757 10.2515 15.3757 9.82918 15.1646L2.28885 11.3944C1.55181 11.0259 1.55181 9.9741 2.28885 9.60557L3.5 9"
          stroke={fill}
        />
        <path
          d="M14.1708 1.33541L21.7111 5.10557C22.4482 5.4741 22.4482 6.5259 21.7111 6.89443L11.1708 12.1646C10.7485 12.3757 10.2515 12.3757 9.82918 12.1646L2.28885 8.39443C1.55181 8.0259 1.5518 6.9741 2.28885 6.60557L12.8292 1.33541C13.2515 1.12426 13.7485 1.12426 14.1708 1.33541Z"
          stroke={fill}
        />
        <path d="M13 4.5L16 6" stroke={fill} strokeLinecap="round" />
        <path d="M11 5.5L12.5 6.25" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default FilesPen;
