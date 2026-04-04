import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClothesHanger({
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
          d="m9,9.792c-.4141,0-.75-.3359-.75-.75v-1.792c0-.4141.3359-.75.75-.75.4668,0,.8994-.2124,1.1865-.582.292-.3765.3838-.8486.2598-1.3301-.126-.4917-.542-.9072-1.0342-1.0347-.4814-.1226-.9541-.0317-1.3301.2598-.3701.2871-.582.7197-.582,1.187,0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75c0-.9346.4238-1.7993,1.1631-2.3726.7402-.5732,1.6934-.7666,2.624-.5264,1.0205.2637,1.8496,1.0928,2.1123,2.1128.2383.9268.0459,1.8828-.5273,2.623-.416.5361-.9844.9062-1.6221,1.0693v1.1357c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.5,16H3.5c-1.3789,0-2.5-1.1216-2.5-2.5,0-.2607.1348-.5024.3574-.6387l7.25-4.458c.3525-.2178.8145-.1069,1.0312.2456.2168.353.1074.8149-.2461,1.0317l-6.8193,4.1938c.1484.3662.5078.6255.9268.6255h11c.4121,0,.7666-.25.9189-.6064l-4.4121-2.479c-.3613-.2026-.4893-.6602-.2871-1.021.2031-.3608.6592-.4897,1.0215-.2866l4.876,2.7393c.2363.1328.3828.3828.3828.6538,0,1.3784-1.1211,2.5-2.5,2.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClothesHanger;
