import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DarkModeSparkle({
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
          d="m16.3838,7.4619c-.3057.9194-1.1631,1.5381-2.1338,1.5381s-1.8281-.6187-2.1348-1.5396l-.3936-1.1816-1.1826-.3936c-.9219-.3091-1.5391-1.167-1.5391-2.1353s.6172-1.8257,1.5352-2.1338l.8025-.2671c-.7397-.2258-1.5241-.3491-2.3376-.3491C4.5817,1,1,4.5818,1,9s3.5817,8,8,8,8-3.5818,8-8c0-.814-.1234-1.5986-.3493-2.3384l-.2669.8003Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m17.4873,3.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4,9c0,2.761,2.239,5,5,5V4c-2.761,0-5,2.239-5,5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DarkModeSparkle;
