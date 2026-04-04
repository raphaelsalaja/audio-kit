import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TouchClick2({
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
          d="m14.501,8.75c-.4517,0-.8354.1416-1.123.4072-.2305-.5332-.7612-.9072-1.3779-.9072-.4199,0-.833.1587-1.1235.4043-.231-.5317-.7607-.9043-1.3765-.9043-.3838,0-.7344.145-1,.3828v-3.1328c0-.8271-.6729-1.5-1.5-1.5s-1.5.6729-1.5,1.5v6.4917l-1.3213-1.6831c-.2471-.3149-.6025-.5146-1.002-.562-.395-.0479-.79.0625-1.104.3086-.6328.4971-.7407,1.3345-.2661,2.0879l1.96,3.0142c1.1572,1.7808,3.1157,2.8438,5.2393,2.8438h1.7451c2.895,0,5.25-2.355,5.25-5.25v-2.001c0-.8271-.6729-1.5-1.5-1.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m2.999,7.187c-.3076,0-.5962-.1904-.7061-.4966-.1943-.5415-.293-1.1104-.293-1.6904C2,2.2432,4.2432,0,7,0s5,2.2432,5,5c0,.1396-.0059.2788-.0171.416-.0347.4126-.3911.7153-.8105.6846-.4126-.0347-.7192-.3975-.6846-.8105.0083-.0952.0122-.1924.0122-.29,0-1.9297-1.5703-3.5-3.5-3.5s-3.5,1.5703-3.5,3.5c0,.4067.0688.8047.2051,1.1836.1396.3896-.063.8193-.4526.9595-.0835.0298-.1694.0439-.2534.0439Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TouchClick2;
